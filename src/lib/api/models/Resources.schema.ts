import { ObjectId } from 'mongodb';
import { ResourceType } from '@/lib/api/const/enum';

interface IResourcesContructor {
  _id: ObjectId; // Unique identifier for the resource
  title: string; // Title of the resource
  description: string; // Description of the resource
  url: string; // URL of the resource
  created_at: Date; // Timestamp of when the resource was created
  updated_at: Date; // Timestamp of the last update to the resource
  type: ResourceType; // Type of the resource (e.g., article, video, etc.)
  tags?: ObjectId[]; // Optional array of tag IDs associated with the resource
}

export default class Resource {
  _id: ObjectId;
  title: string;
  description: string;
  url: string;
  created_at: Date;
  updated_at: Date;
  type: ResourceType;
  tags?: ObjectId[];

  constructor(resource: IResourcesContructor) {
    this._id = resource._id;
    this.title = resource.title;
    this.description = resource.description;
    this.url = resource.url;
    this.created_at = resource.created_at || new Date();
    this.updated_at = resource.updated_at || new Date();
    this.type = resource.type;
    this.tags = resource.tags || [];
  }
}
