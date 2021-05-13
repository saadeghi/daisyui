<template>
  <div class="mb-60">

    <Wrapper title="dropdown" classes="flex justify-center bg-base-200 py-6 rounded-box">
      <div class="dropdown">
        <div class="m-1 btn" tabindex="0">Dropdown</div>
        <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </Wrapper>

    <Wrapper title="dropdown dropdown-end" classes="flex justify-center bg-base-200 py-6 rounded-box">
      <div class="dropdown dropdown-end">
        <div class="m-1 btn" tabindex="0">Dropdown</div>
        <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </Wrapper>

    <Wrapper title="dropdown dropdown-top" classes="flex justify-center bg-base-200 py-6 rounded-box">
      <div class="dropdown dropdown-top">
        <div class="m-1 btn" tabindex="0">Dropdown</div>
        <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </Wrapper>
    <Wrapper title="dropdown dropdown-top dropdown-end" classes="flex justify-center bg-base-200 py-6 rounded-box">
      <div class="dropdown dropdown-top dropdown-end">
        <div class="m-1 btn" tabindex="0">Dropdown</div>
        <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </Wrapper>
    <Wrapper title="dropdown dropdown-left" classes="flex justify-center bg-base-200 py-6 rounded-box">
      <div class="dropdown dropdown-left">
        <div class="m-1 btn" tabindex="0">Dropdown</div>
        <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </Wrapper>
    <Wrapper title="dropdown dropdown-left dropdown-end" classes="flex justify-center bg-base-200 py-6 rounded-box">
      <div class="dropdown dropdown-left dropdown-end">
        <div class="m-1 btn" tabindex="0">Dropdown</div>
        <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </Wrapper>
    <Wrapper title="dropdown dropdown-right" classes="flex justify-center bg-base-200 py-6 rounded-box">
      <div class="dropdown dropdown-right">
        <div class="m-1 btn" tabindex="0">Dropdown</div>
        <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </Wrapper>
    <Wrapper title="dropdown dropdown-right dropdown-end" classes="flex justify-center bg-base-200 py-6 rounded-box">
      <div class="dropdown dropdown-right dropdown-end">
        <div class="m-1 btn" tabindex="0">Dropdown</div>
        <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </Wrapper>

    <Wrapper title="dropdown dropdown-hover" classes="flex justify-center bg-base-200 py-6 rounded-box">
      <div class="dropdown dropdown-hover">
        <div class="m-1 btn" tabindex="0">open on hover</div>
        <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </Wrapper>

    <Wrapper title="dropdown dropdown-open" classes="flex justify-center bg-base-200 h-72 py-6 rounded-box">
      <div class="dropdown dropdown-open">
        <div class="m-1 btn" tabindex="0">force open</div>
        <div class="w-64 shadow card dropdown-content bg-primary text-primary-content">
          <div class="card-body">
            <h2 class="card-title">This is a card!</h2>
            <p>you can use any element with `dropdown-content` class.</p>
          </div>
        </div>
      </div>
    </Wrapper>

    <Wrapper title="dorpdown in navbar" classes="bg-base-200 h-72 p-6 rounded-box">

        <Navbar class="mb-2 bg-base-300 rounded-box">
          <div class="flex-1 px-2 lg:flex-none">
            <a class="text-lg font-bold">
              DaisyUI
            </a>
          </div>
          <div class="flex justify-end flex-1 px-2">
            <div class="flex items-stretch">
              <a class="btn btn-ghost rounded-btn">
                Button
              </a>
              <div class="dropdown dropdown-end">
                <div class="btn btn-ghost rounded-btn" tabindex="0">Dropdown</div>
                <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                  <li><a>Item 3</a></li>
                </ul>
              </div>
            </div>

          </div>
        </Navbar>

    </Wrapper>

    <Wrapper title="helper dropdown" classes="flex justify-center h-72 bg-base-200 py-6 rounded-box">
      A normal text and a helper dropdown
      <div class="dropdown dropdown-end">
        <div class="btn btn-circle btn-ghost btn-xs text-info" tabindex="0">
          <Icon glyph="info" class="inline w-5 h-5 stroke-current" />
        </div>
        <div class="shadow card compact dropdown-content bg-base-100 rounded-box w-52" tabindex="0">
          <div class="card-body">
            <h2 class="card-title">You needed more info?</h2>
            <p>Here is more info you wanted. You're welcome!</p>
          </div>
        </div>
      </div>
    </Wrapper>



  </div>
</template>
