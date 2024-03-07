export class Movie{
    href: string = "";
    title: string = "";
    year: number = 0;
    cast: Actor[] = [];
    genres: string[] | undefined = [];
    extract: string = "";
    thumbnail: string = "";
    thumbnailWidth: string = "";
    thumbnailHeight: string = "";
}

export class Actor{
    firstName: string = "";
    lastName: string = "";
}