<script setup lang="ts" generic="T extends keyof Resources">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import type { Resources } from "../types";

defineProps<{ resourceName: T }>();
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading> Array of Resource {{ resourceName }} </template>
  </WelcomeItem>
</template>
