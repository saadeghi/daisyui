<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        status: status,
        message: error.message,
      },
    };
  }
</script>

<script>
  export let status;
  export let message;
</script>

<div class="min-h-screen hero bg-base-200">
  <div class="text-center hero-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold lg:text-7xl xl:text-9xl opacity-10">
        {status}
      </h1>
      <p class="mb-5">
        {message}
      </p>
      <a class="btn" href="/">Go back</a>
    </div>
  </div>
</div>
