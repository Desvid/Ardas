export interface TableData {
  id: number;
  name: string;
  modified: string;
}

export interface SavedLocalStorageData {
  id: number;
  name: string;
  template: string;
  configs: Array<StorageEditableItemConfig>;
  modified: string | number;
}

export interface StorageEditableItemConfig {
  fontSize: number;
}