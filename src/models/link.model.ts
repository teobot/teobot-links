
export enum LinkTypes {
  COLOURS,
  DRAWING,
  HELPER
}

interface ILink {
  title: string;
  description: string;
  href: string;
  image?: string;
  tags: string[];
  type: LinkTypes;
}

export class Link implements ILink {
  title: string;
  description: string;
  href: string;
  image?: string;
  tags: string[];
  type: LinkTypes;

  constructor(link: ILink) {
    this.title = link.title;
    this.description = link.description;
    this.image = link.image;
    this.href = link.href;
    this.tags = link.tags;
    this.type = link.type;
  }

}