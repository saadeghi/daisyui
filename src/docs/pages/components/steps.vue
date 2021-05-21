<template>
  <div>



    <Wrapper title="steps">
        <ul class="steps w-full">
          <li class="step step-primary">Register</li>
          <li class="step step-primary">Choose plan</li>
          <li class="step">Purchase</li>
          <li class="step">Receive Product</li>
        </ul>
    </Wrapper>


    <Wrapper title="steps">
        <ul class="steps w-full">
          <li class="step step-info">Fly to moon</li>
          <li class="step step-info">Shrink the moon</li>
          <li class="step step-info">Grab the moon</li>
          <li class="step step-error" data-content="?">Sit on toilet</li>
        </ul>
    </Wrapper>



    <Wrapper title="with data-content">
        <ul class="steps w-full">
          <li class="step step-neutral" data-content="?">Step 1</li>
          <li class="step step-neutral" data-content="!">Step 2</li>
          <li class="step step-neutral" data-content="✓">Step 3</li>
          <li class="step step-neutral" data-content="✕">Step 4</li>
          <li class="step step-neutral" data-content="★">Step 5</li>
          <li class="step step-neutral" data-content="">Step 6</li>
          <li class="step step-neutral" data-content="●">Step 7</li>
        </ul>
    </Wrapper>




    <Wrapper title="steps with scrollable container">
      <div class="overflow-x-auto">
        <ul class="steps w-full">
          <li class="step">start</li>
          <li class="step step-secondary">2</li>
          <li class="step step-secondary">3</li>
          <li class="step step-secondary">4</li>
          <li class="step">5</li>
          <li class="step step-accent">6</li>
          <li class="step step-accent">7</li>
          <li class="step">8</li>
          <li class="step step-error">9</li>
          <li class="step step-error">10</li>
          <li class="step">11</li>
          <li class="step">12</li>
          <li class="step step-warning">13</li>
          <li class="step step-warning">14</li>
          <li class="step">15</li>
          <li class="step step-neutral">16</li>
          <li class="step step-neutral">17</li>
          <li class="step step-neutral">18</li>
          <li class="step step-neutral">19</li>
          <li class="step step-neutral">20</li>
          <li class="step step-neutral">21</li>
          <li class="step step-neutral">22</li>
          <li class="step step-neutral">23</li>
          <li class="step step-neutral">end</li>
        </ul>
      </div>
    </Wrapper>



  </div>
</template>
