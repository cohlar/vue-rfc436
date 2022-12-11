<script setup lang="ts" generic="T extends keyof Resources">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import type { Resources } from "../types";

const props = defineProps<{ resourceName: T }>();

const resources: Resources = {
  first: [{ something: "shallow" }],
  second: [{ somethingElse: 21 }],
};
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading> Array of Resource {{ resourceName }} </template>

    <!-- This works -->
    {{ JSON.stringify(resources[props.resourceName]) }}

    <!-- This does NOT work -->
    {{ JSON.stringify(resources[resourceName]) }}
  </WelcomeItem>
</template>
