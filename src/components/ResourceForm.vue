<script setup lang="ts" generic="T extends ResourceFormMode">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import { ref } from "vue";
import type { ResourceByMode, ResourceFormMode } from "@/types";
import { DbResource, Resource } from "@/models";

const props = defineProps<{ mode: T; resourceId?: string }>();

let initialResource: ResourceByMode[T];

if (props.mode === "create") {
  initialResource = new Resource();
} else if (["view", "update"].includes(props.mode) && props.resourceId) {
  // Here we simulate fetching the resource from the DB
  const fetchedResource: DbResource = {
    id: "someUuid",
    foo: "abc",
    bar: 123,
    baz: true,
  };
  initialResource = new DbResource(fetchedResource);
}

const resource = ref(initialResource);

const createResource = (resourceToCreate: Resource) => {
  // Here we simulate inserting a resource into the DB
  return Promise.resolve(resourceToCreate).then(console.log);
};

const updateResource = (resourceToUpdate: DbResource) => {
  // Here we simulate updating an existing resource in the DB
  return Promise.resolve(resourceToUpdate).then(console.log);
};

const submitFunctions = {
  view: Promise.resolve,
  create: createResource,
  update: updateResource,
};

const submit = () => submitFunctions[props.mode](resource.value);
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading> Resource Form in mode {{ mode }} </template>
    <template v-if="resource">
      <form @submit.prevent="submit">
        <label v-if="mode !== 'create'">
          Id:
          <input type="text" v-model="resource.id" readonly />
        </label>

        <label>
          Foo:
          <input
            type="text"
            v-model="resource.foo"
            :readonly="mode === 'view'"
          />
        </label>

        <label>
          Bar:
          <input
            type="number"
            v-model.number="resource.bar"
            :readonly="mode === 'view'"
          />
        </label>

        <label>
          Baz:
          <input
            type="checkbox"
            v-model="resource.baz"
            :disabled="mode === 'view'"
          />
        </label>

        <input v-if="mode !== 'view'" type="submit" :value="mode" />
      </form>
    </template>
  </WelcomeItem>
</template>

<style scoped>
form {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
