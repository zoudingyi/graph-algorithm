<template>
  <div class="glass-container">
    <ul class="dock" @mouseleave="mouseLeave">
      <!-- <li>😃</li>
      <li>😃</li> -->
      <!-- <li class="loading">😃</li> -->
      <li
        v-for="(item, index) in list"
        :key="index"
        @mousemove="mouseMove"
        @click="handleClick(item, $event)"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          label: '1',
          route: 'homePage'
        },
        {
          label: '1',
          route: 'bubbleSort'
        }
      ]
    };
  },
  methods: {
    mouseMove($e) {
      const item = $e.target;
      const itemRect = item.getBoundingClientRect();
      const offset = Math.abs($e.clientX - itemRect.left) / itemRect.width;
      const prev = item.previousElementSibling || null;
      const next = item.nextElementSibling || null;
      const scale = 0.6; // 放大倍数 最大1.6倍
      this.resetScale();
      if (prev) {
        prev.style.setProperty('--scale', 1 + scale * Math.abs(offset - 1));
      }
      item.style.setProperty('--scale', 1 + scale);
      if (next) {
        next.style.setProperty('--scale', 1 + scale * offset);
      }
    },
    // 还原大小
    resetScale() {
      document.querySelectorAll('.dock li').forEach((li) => {
        li.style.setProperty('--scale', 1);
      });
    },
    mouseLeave() {
      this.resetScale();
    },
    handleClick(item, $e) {
      this.$router.push({ name: item.route });
      $e.currentTarget.classList.add('loading');
      setTimeout(() => {
        $e.target.classList.remove('loading');
      }, 2000);
    }
  }
};
</script>

<style lang="scss">
.glass-container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 8rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  .dock {
    // 定义css变量
    --scale: 1;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dock li {
    user-select: none;
    font-size: calc(6rem * var(--scale));
    padding: 0 10px;
    cursor: pointer;
    // 放大效果后的定位
    position: relative;
    top: calc((6rem * var(--scale) - 6rem) / 2 * -1);

    transition: 15ms all ease-out;
  }
  .dock li.loading {
    animation: 1s loading ease-in infinite;
  }
  @keyframes loading {
    0%,
    100% {
      transform: translateY(0px);
    }
    60% {
      transform: translateY(-40px);
    }
  }
}
</style>
