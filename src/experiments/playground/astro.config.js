import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import { exec } from 'child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getAllCssFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllCssFiles(file));
    } else if (path.extname(file) === '.css') {
      results.push(file);
    }
  });
  return results;
}

function customWatcher(dir) {
  return {
    name: 'vite-plugin-custom-css-watcher',
    configureServer(server) {
      const cssFiles = getAllCssFiles(dir);

      // Watch all the CSS files
      cssFiles.forEach(file => {
        server.watcher.add(file);
      });

      server.watcher.on('change', (file) => {
        if (cssFiles.includes(file)) {
          console.log(`File changed: ${file}`);
          exec('cd ../../../ && bun build.js', (err, stdout, stderr) => {
            if (err) {
              console.error(`Error executing command: ${err}`);
              return;
            }
            console.log(stdout);
            console.error(stderr);
          });
        }
      });

      server.watcher.on('unlink', (file) => {
        if (cssFiles.includes(file)) {
          console.log(`File unlinked: ${file}`);
          exec('cd ../../../ && bun build.js', (err, stdout, stderr) => {
            if (err) {
              console.error(`Error executing command: ${err}`);
              return;
            }
            console.log(stdout);
            console.error(stderr);

            restartServer();

          });
        }
      });

      server.watcher.on('add', (file) => {
        if (cssFiles.includes(file)) {
          console.log(`File added: ${file}`);
          exec('cd ../../../ && bun build.js', (err, stdout, stderr) => {
            if (err) {
              console.error(`Error executing command: ${err}`);
              return;
            }
            console.log(stdout);
            console.error(stderr);

            // Trigger HMR for the main tailwind.css file
            server.ws.send({
              type: 'update',
              updates: [{
                type: 'css-update',
                path: '/src/tailwind.css',
                timestamp: Date.now()
              }]
            });
          });
        }
      });
    }
  };
}

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [
      tailwindcss(),
      customWatcher('../../../css')
    ],
  },
})
