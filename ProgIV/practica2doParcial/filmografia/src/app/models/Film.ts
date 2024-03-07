export class Film {
  id: number = 0;
  name: string = "";
  type: 'Serie' | 'Movie' = "Movie";
  actors: Actor[] = [];
  gnere: string = "";
  country: string = "";
  lenght: number | undefined;
  chapters: Chapter[] | undefined = undefined;
}

export class Actor {
  id: number = 0;
  name: string = "";
  lastName: string = "";
}

export class Chapter {
  id: number = 0;
  name: string = "";
  duration: number = 0;
}
