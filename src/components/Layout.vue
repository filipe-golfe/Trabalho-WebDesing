<template>
  <div class="container-fluid">
    <div class="row">
      <div id="left-panel" class="col-sm-5 col-md-4">
        <slot name="profile"></slot>
        <slot name="search"></slot>
        <slot name="contacts"></slot>
      </div>
      <div id="right-panel" class="col-sm-7 col-md-8">
        <slot name="contact"></slot>
        <slot name="messages"></slot>
        <slot name="inputMessage"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>