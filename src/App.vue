<template>
  <div id="app">
    <Layout>
      <Profile slot="profile" />
      <Search slot="search" />
      <Contacts slot="contacts" />
      <Contact slot="contact" />
      <Messages slot="messages" />
      <InputMessage slot="inputMessage" />
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";
import Profile from "./components/Profile.vue";
import Search from "./components/Search.vue";
import Contacts from "./components/Contacts.vue";
import Contact from "./components/Contact.vue";
import Messages from "./components/Messages.vue";
import InputMessage from "./components/InputMessage.vue";

export default {
  name: "App",
  components: {
    Layout,
    Profile,
    Search,
    Contacts,
    Contact,
    Messages,
    InputMessage,
  },
};
</script>

<style lang="scss">
body {
  overflow: hidden;
}

#profile-row {
  background-color: #eeeeee;
  height: 4rem;
  border: 1px solid;
  border-color: rgba(189, 189, 189, 0.3);
}
#user {
  background-color: #eeeeee;
  height: 4rem;
  border: 1px solid;
  border-color: rgba(189, 189, 189, 0.3);
  border-left: none;
}
#busca {
  background-color: #f8f8f8;
  height: 3rem;
}
#messages {
  background-color: #e5ddd5;
  height: calc(100vh - 127px);
}
#chat {
  background-color: #eeeeee;
  height: 4rem;
}
#contatos {
  > .row {
    > .col {
      border-bottom: thin solid rgba(189, 189, 189, 0.3);
    }
  }
}
img {
  width: 3.5rem;
}
small {
  color: #9b9b9b;
  font-size: 0.8rem;
}
h6 {
  font-size: 1rem;
  margin: 0;
}
.badge {
  background-color: #09d261;
  text-decoration: none;
}
@media (max-width: 300px) {
  #user {
    height: 8rem;
  }
}
</style>
