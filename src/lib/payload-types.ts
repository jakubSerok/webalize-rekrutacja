import { Where } from 'payload/types';

export type WhereQuery = Where | { [key: string]: any };

export interface Image {
  id: string;
  alt: string;
  url: string;
  width: number;
  height: number;
  filename: string;
  mimeType: string;
  filesize: number;
  createdAt: string;
  updatedAt: string;
}


