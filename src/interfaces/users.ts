export interface UsersResponse {
  results: User[];
  info:    Info;
}

export interface Info {
  seed:    string;
  results: number;
  page:    number;
  version: string;
}

export interface User {
  gender:  string;
  name:    Name;
  email:   string;
  phone:   string;
  picture: Picture;
  nat:     string;
  aluxionToHomeStop: number;
  homeToAluxionStop: number;
}

export interface Name {
  title: string;
  first: string;
  last:  string;
}

export interface Picture {
  large:     string;
  medium:    string;
  thumbnail: string;
}
