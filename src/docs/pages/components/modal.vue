<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'modal', desc: 'Container element' },
        { class: 'modal-box', desc: 'The content of modal' },
        { class: 'modal-action', desc: 'Container for modal buttons' },
        { class: 'modal-toggle', desc: 'For checkbox that controls modal' },
        { class: 'modal-button', desc: 'For <label> that checks the checkbox to opens/closes modal' },
      ],
      utilities : [
        { class: 'modal-open', desc: 'Add/remove this class to open/close the modal using JS' },
      ]
    }"/>

    <Wrapper title="modal using URL hash (anchor link)">
      <a class="btn btn-primary" :href="`/components/modal#my-modal`" v-scroll-to="{el: '#my-modal'}">open modal</a>
      <div class="modal" id="my-modal">
        <div class="modal-box">
          <p>Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.</p>
          <div class="modal-action">
            <a class="btn btn-primary" :href="`/components/modal#`">Accept</a>
            <a class="btn" :href="`/components/modal#`">Close</a>
          </div>
        </div>
      </div>
    </Wrapper>

    <Wrapper title="modal using a hidden checkbox">
      <label class="btn btn-primary modal-button" for="my-modal-2">open modal</label>
      <input type="checkbox" id="my-modal-2" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <p>Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.</p>
          <div class="modal-action">
            <label class="btn btn-primary" for="my-modal-2">Accept</label>
            <label class="btn" for="my-modal-2">Close</label>
          </div>
        </div>
      </div>
    </Wrapper>

  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS modal component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS modal component - Tailwind CSS modal examples'
        }
      ]
    }
  }
}
</script>
