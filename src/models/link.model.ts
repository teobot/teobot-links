export interface ILink {
  title: string;
  description: string;
  href: string;
  image?: string;
  tags: string[];
}

export class Link implements ILink {
  title: string;
  description: string;
  href: string;
  image?: string;
  tags: string[];

  constructor(link: ILink) {
    this.title = link.title;
    this.description = link.description;
    this.image = link.image;
    this.href = link.href;
    this.tags = link.tags;
  }

}