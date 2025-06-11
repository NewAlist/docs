<template>
  <Sidebar>
    <template #top>
      <div class="ss">
      <!-- 
        <div class="sidebar-ad-placeholder">
          广告 1
        </div>
        <div class="sidebar-ad-placeholder">
          广告 2
        </div>
        <div class="sidebar-ad-placeholder">
          广告 3
        </div> 
      -->
        <div style="padding: 8px; padding-bottom: 0; margin-bottom: -16px;" v-if="isDrivers">
          <ApiSelect />
        </div>
      </div>
    </template>
  </Sidebar>
</template>
<script setup lang="ts">
import Sidebar from "vuepress-theme-hope/modules/sidebar/components/Sidebar";
import { usePageData } from "@vuepress/client";
import { computed } from "vue";
import ApiSelect from "./api/ApiSelect.vue";

const pageData = usePageData();
const spStr = computed(() => {
  if (pageData.value.path.startsWith("/zh/")) {
    return "赞助商";
  }
  return "Sponsorship";
});
const isDrivers = computed(() => {
  return pageData.value.path.includes("/drivers/");
});

const showMingdao = false;

const handleAdClick = async () => {
  try {
    await fetch('https://xxxx.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: "alist-hutool"
      })
    });
  } catch (error) {
    console.error('广告统计请求失败:', error);
  }
};
</script>

<style scoped lang="scss">
.sidebar-ad-placeholder {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 35px 0 16px 0;
  border-radius: 5px;
}

.mingdao {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  a {
    max-width: 70%;

    img {
      width: 100%;
    }
  }

  span {
    width: 70%;
    text-align: right;
    font-size: small;
    color: #999;
  }
}
</style>
