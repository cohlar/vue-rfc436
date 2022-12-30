import type { DbResource, Resource } from "@/models";

export interface ResourceByMode {
  view: DbResource;
  create: Resource;
  update: DbResource;
}

export type ResourceFormMode = keyof ResourceByMode;
