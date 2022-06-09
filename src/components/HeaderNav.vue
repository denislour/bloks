<template>
  <header class="flex w-full items-center justify-center p-4">
    <div
      :class="`menu-toggle relative z-50 ${is_active_menu ? 'active' : ''}`"
      @click="ToggleMenu"
    >
      <div class="hamburger">
        <span></span>
      </div>
    </div>
    <div class="text-center text-2xl uppercase font-light tracking-widest">
      Bloks News
    </div>
  </header>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const ToggleMenu = () => {
      store.dispatch("ToggleMenu");
    };
    return {
      is_active_menu: computed(() => store.state.is_active_menu),
      ToggleMenu,
    };
  },
};
</script>

<style scoped>
.menu-toggle {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 32px;
  height: 32px;
  cursor: pointer;
}

.hamburger {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32px;
  height: 32px;
}

.hamburger span {
  top: 50%;
  transform: translateY(-50%);
}

.hamburger span,
.hamburger span:before,
.hamburger span:after {
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 99px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}

.hamburger span:before,
.hamburger span:after {
  content: "";
}

.hamburger span::before {
  top: -8px;
}

.hamburger span::before {
  top: 8px;
}

.menu-toggle.is-active .hamburger > span {
  transform: rotate(45deg);
}

.menu-toggle.active .hamburger > span:before {
  top: 0;
  transform: rotate(0deg);
}

.menu-toggle.active .hamburger > span:after {
  top: 0;
  transform: rotate(90deg);
}
</style>
