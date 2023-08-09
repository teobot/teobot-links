interface ILink {
  href: string;
  title: string;
}

export class Link implements ILink {
  href: string;
  title: string;

  constructor(link: ILink) {
    this.href = link.href;
    this.title = link.title;
  }
}