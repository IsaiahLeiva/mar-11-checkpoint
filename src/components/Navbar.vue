<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img
          alt="bm-logo"
          src="https://www.pngitem.com/pimgs/m/346-3462046_half-life-black-mesa-logo-hd-png-download.png"
          height="45"
        />
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
      <!-- //NOTE create post button -->
    </button>
    <b
      title="Create Post"
      class="
        create-btn
        btn btn-success
        rounded-pill
        shadow
        d-flex
        align-items-center
        justify-content-center
      "
      v-if="account.id == profile.id"
      data-bs-toggle="modal"
      data-bs-target="#form-modal"
    >
      <i class="mdi mdi-plus">Create Post</i>
    </b>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link
            :to="{ name: 'About' }"
            class="btn text-success lighten-30 selectable text-uppercase"
          >
            About
          </router-link>
        </li>
      </ul>
      <!-- //NOTE: search bar -->
      <div class="topnav">
        <div class="search-container">
          <form @submit.prevent="handleSearch">
            <input
              type="text"
              v-model="search"
              placeholder="Search Posts.."
              name="search"
            />
            <!-- <Search /> -->
            <!-- <button type="submit"><i class="fa fa-search"></i></button> -->
          </form>
        </div>
      </div>
      <span class="navbar-text">
        <button
          class="
            btn
            selectable
            text-success
            lighten-30
            text-uppercase
            my-2 my-lg-0
          "
          @click="login"
          v-if="!user.isAuthenticated"
        >
          Login
        </button>

        <div class="dropdown my-2 my-lg-0" v-else>
          <div
            class="dropdown-toggle selectable"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="authDropdown"
          >
            <img
              :src="user.picture"
              alt="user photo"
              height="40"
              class="rounded"
            />
            <span class="mx-3 text-success lighten-30">{{ user.name }}</span>
          </div>
          <div
            class="dropdown-menu p-0 list-group w-100"
            aria-labelledby="authDropdown"
          >
            <router-link :to="{ name: 'Account' }">
              <div class="list-group-item list-group-item-action hoverable">
                Manage Account
              </div>
            </router-link>
            <div
              class="
                list-group-item list-group-item-action
                hoverable
                text-danger
              "
              @click="logout"
            >
              <i class="mdi mdi-logout"></i>
              logout
            </div>
          </div>
        </div>
      </span>
    </div>
  </nav>
</template>

<script>
import { AuthService } from "../services/AuthService";
import { AppState } from "../AppState";
import { computed } from "vue";
// import func from "vue-editor-bridge";
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup();
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin });
      },
    };
  },
  data() {
    return {
      posts: [],
      search: "",
    };
  },
  computed: {
    filteredPosts: function () {
      return this.posts.filter((post) => {
        return post.title.match(this.search);
      });
    },
  },
  methods: {
    handleSearch() {
      this.posts.filter((singlePost) => {
        if (singlePost.name === this.search) {
          console.log(singlePost);
        }
      });
      // alert(this.search);
    },
  },
};
</script>

<style scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
