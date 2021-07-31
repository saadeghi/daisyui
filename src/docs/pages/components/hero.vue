<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'hero', desc: 'Container element' },
        { class: 'hero-content', desc: 'Container for content' },
        { class: 'hero-overlay', desc: 'Overlay the covers the background image' },
      ]
    }"/>
    <Wrapper title="hero">
      <Hero class="min-h-screen bg-base-200">
        <div class="text-center hero-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">
              Hello there
            </h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Button class="btn-primary">Get Started</Button>
          </div>
        </div>
      </Hero>
    </Wrapper>
    <Wrapper title="hero with figure">
      <Hero class="min-h-screen bg-base-200">
        <div class="flex-col hero-content lg:flex-row-reverse">
          <img class="max-w-sm rounded-lg shadow-2xl" src="https://picsum.photos/id/1005/600/600" />
          <div>
            <h1 class="mb-5 text-5xl font-bold">
              Hello there
            </h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Button class="btn-primary">Get Started</Button>
          </div>
        </div>
      </Hero>
    </Wrapper>
    <Wrapper title="hero with form">
      <Hero class="min-h-screen bg-base-200">
        <div class="flex-col justify-center hero-content lg:flex-row">
          <div class="text-center lg:text-left">
            <h1 class="mb-5 text-5xl font-bold">
              Hello there
            </h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <Card class="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <FormControl>
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <Input class="input input-bordered" type="text" placeholder="email" />
              </FormControl>
              <FormControl>
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <Input class="input input-bordered" type="text" placeholder="password" />
                <label class="label">
                  <a href="#" class="label-text-alt">Forgot password?</a>
                </label>
              </FormControl>
              <FormControl class="mt-6">
                <input class="btn btn-primary" type="button" value="Login">
              </FormControl>
            </div>
          </Card>
        </div>
      </Hero>
    </Wrapper>
    <Wrapper title="hero">
      <Hero class="min-h-screen" style="background-image: url(https://picsum.photos/id/1005/1600/1400)">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="text-center hero-content text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">
              Hello there
            </h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Button class="btn-primary">Get Started</Button>
          </div>
        </div>
      </Hero>
    </Wrapper>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS hero component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS hero component - Tailwind CSS hero examples'
        }
      ]
    }
  }
}
</script>
