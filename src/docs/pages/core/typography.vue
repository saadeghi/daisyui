<template>
  <div>
    <div>

    <div class="mb-10 tabs">
      <NuxtLink to="/core/layout" class="tab tab-lifted tab-lg"><Icon glyph="template" class="inline-block w-4 h-4 mr-2 stroke-current lg:w-6 lg:h-6" />Layout</NuxtLink>
      <NuxtLink to="/core/typography" class="tab tab-lifted tab-lg tab-active"><Icon glyph="text" class="inline-block w-4 h-4 mr-2 fill-current lg:w-6 lg:h-6" />Typography</NuxtLink>
      <span class="flex-grow hidden cursor-default tab tab-lifted tab-lg sm:block"></span>
    </div>

    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">Typography</span>
    </h2>

    </div>
    <div class="prose text-base-content">
      <Wrapper nocode>
        <p>You should use official <a target="_blank" href="https://github.com/tailwindlabs/tailwindcss-typography">TailwindCSS Typography</a> plugin.
        It handles everything and it's fully customizable</p>
        <p>
          <span class="badge badge-ghost">daisyUI</span> adds some style to <span class="badge badge-ghost">@tailwindcss/typography</span> so it will use the same theme as other elements.
          Just make sure on your tailwind.config.js, you have <span class="badge badge-ghost">daisyUI</span> after <span class="badge badge-ghost">@tailwindcss/typography</span>
        </p>

      <div class="w-full max-w-xl my-2">
        <div class="shadow-lg mockup-code">
        <pre><code>module.exports = {
      <span class="text-neutral-content text-opacity-30">//...</span>
      plugins: [
        require('@tailwindcss/typography'),
        require('daisyui'),
      ],

    }</code></pre>
        </div>
      </div>

        <p>Here you can see how elements will look using <span class="badge badge-ghost">@tailwindcss/typography</span> :</p>
      </Wrapper>
      <Wrapper title="headings" nocode>
        <h1>Heading</h1>
        <h2>Heading</h2>
        <h3>Heading</h3>
        <h4>Heading</h4>
        <h5>Heading</h5>
        <h6>Heading</h6>
      </Wrapper>

      <Wrapper title="paragraph" nocode>
        <p>
          Inventore non totam deserunt est alias ducimus. Corrupti quidem debitis
          quo corrupti et laborum totam. Ut aperiam et delectus aliquam nulla
          magnam quis perspiciatis.
        </p>
      </Wrapper>

      <Wrapper title="quote" nocode>
        <blockquote>
          Inventore non totam deserunt est alias ducimus. Corrupti quidem debitis
          quo corrupti et laborum totam. Ut aperiam et delectus aliquam nulla
          magnam quis perspiciatis.
        </blockquote>
      </Wrapper>

      <Wrapper title="link" nocode>
        <blockquote>Hello, <a href="#">This is a link</a>.</blockquote>
      </Wrapper>

      <Wrapper title="code" nocode>
        <pre><code>Inventore non totam deserunt est alias ducimus. Corrupti quidem debitis
  quo corrupti et laborum totam. Ut aperiam et delectus aliquam nulla
  magnam quis perspiciatis.</code></pre>
      </Wrapper>

      <Wrapper title="text decorators" nocode>
        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
        <p>
          <del>This line of text is meant to be treated as deleted text.</del>
        </p>
        <p>
          <s>This line of text is meant to be treated as no longer accurate.</s>
        </p>
        <p>
          <ins
            >This line of text is meant to be treated as an addition to the
            document.</ins
          >
        </p>
        <p><u>This line of text will render as underlined</u></p>
        <p>
          <small>This line of text is meant to be treated as fine print.</small>
        </p>
        <p><strong>This line rendered as bold text.</strong></p>
        <p><em>This line rendered as italicized text.</em></p>
        <p><abbr title="attribute">attr</abbr></p>
        <p>
          <abbr title="HyperText Markup Language" class="initialism">HTML</abbr>
        </p>
      </Wrapper>

      <Wrapper title="list" nocode>
        <ul class="list-unstyled">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Integer molestie lorem at massa</li>
          <li>Facilisis in pretium nisl aliquet</li>
          <li>
            Nulla volutpat aliquam velit
            <ul>
              <li>Phasellus iaculis neque</li>
              <li>Purus sodales ultricies</li>
              <li>Vestibulum laoreet porttitor sem</li>
              <li>Ac tristique libero volutpat at</li>
            </ul>
          </li>
          <li>Faucibus porta lacus fringilla vel</li>
          <li>Aenean sit amet erat nunc</li>
          <li>Eget porttitor lorem</li>
        </ul>
      </Wrapper>
      <Wrapper title="list nesting" nocode>
        <ol>
          <li>
            <strong>Nested lists are rarely a good idea.</strong>
            <ul>
              <li>
                You might feel like you are being really "organized" or something
                but you are just creating a gross shape on the screen that is hard
                to read.
              </li>
              <li>
                Nested navigation in UIs is a bad idea too, keep things as flat as
                possible.
              </li>
              <li>
                Nesting tons of folders in your source code is also not helpful.
              </li>
            </ul>
          </li>
          <li>
            <strong>Since we need to have more items, here's another one.</strong>
            <ul>
              <li>
                I'm not sure if we'll bother styling more than two levels deep.
              </li>
              <li>
                Two is already too much, three is guaranteed to be a bad idea.
              </li>
              <li>If you nest four levels deep you belong in prison.</li>
            </ul>
          </li>
          <li>
            <strong>Two items isn't really a list, three is good though.</strong>
            <ul>
              <li>
                Again please don't nest lists if you want people to actually read
                your content.
              </li>
              <li>Nobody wants to look at this.</li>
              <li>I'm upset that we even have to bother styling this.</li>
            </ul>
          </li>
        </ol>
      </Wrapper>

      <Wrapper title="image" nocode>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
            alt=""
          />
          <figcaption>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin literature from 45 BC, making
            it over 2000 years old.
          </figcaption>
        </figure>
      </Wrapper>

      <Wrapper title="table" nocode>
        <table>
          <thead>
            <tr>
              <th>Wrestler</th>
              <th>Origin</th>
              <th>Finisher</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bret "The Hitman" Hart</td>
              <td>Calgary, AB</td>
              <td>Sharpshooter</td>
            </tr>
            <tr>
              <td>Stone Cold Steve Austin</td>
              <td>Austin, TX</td>
              <td>Stone Cold Stunner</td>
            </tr>
            <tr>
              <td>Randy Savage</td>
              <td>Sarasota, FL</td>
              <td>Elbow Drop</td>
            </tr>
            <tr>
              <td>Vader</td>
              <td>Boulder, CO</td>
              <td>Vader Bomb</td>
            </tr>
            <tr>
              <td>Razor Ramon</td>
              <td>Chuluota, FL</td>
              <td>Razor's Edge</td>
            </tr>
          </tbody>
        </table>
      </Wrapper>
    </div>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Typography",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS Typography plugin'
        }
      ]
    }
  }
}
</script>
