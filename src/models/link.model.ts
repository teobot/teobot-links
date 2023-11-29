import { add, isBefore } from 'date-fns';

const SHOW_AS_NEW_FOR_DAYS = 7;

export interface ILink {
  title?: string;
  description?: string;
  href: string;
  image?: string;
  tags: string[];
  uploadedDate?: Date;
  isNew?: boolean;
  favicon?: string;
}

export class Link implements ILink {
  title?: string;
  description?: string;
  href: string;
  image?: string;
  tags: string[];

  uploadedDate: Date;

  isNew: boolean = false;

  favicon?: string;

  constructor(link: ILink) {
    this.title = link.title;
    this.description = link.description;
    this.image = link.image;
    this.favicon = link.favicon;
    this.href = link.href;
    this.tags = link.tags;

    if(this.description === "NO_DESCRIPTION_FOUND") {
      console.log("NO_DESCRIPTION_FOUND", this.href);
    } 

    const today = new Date();

    // if uploaded is not provided, set it to 1 day before SHOW_AS_NEW_FOR_DAYS
    if (link.uploadedDate === undefined) {
      this.uploadedDate = new Date("1990-01-01");
    } else {
      this.uploadedDate = link.uploadedDate;
    }

    // is this.uploadedDate more than 7 days ago?
    this.isNew = isBefore(today, add(this.uploadedDate, { days: SHOW_AS_NEW_FOR_DAYS }));
  }

}