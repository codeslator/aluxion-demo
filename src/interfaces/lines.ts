// Generated by https://quicktype.io

export interface LinesResponse {
  code:        string;
  description: string;
  datetime:    string;
  data:        Datum[];
}

export interface Datum {
  line:      string;
  label:     string;
  stops:     Stop[];
  timeTable: TimeTable[];
}

export interface Stop {
  stop:          string;
  name:          string;
  postalAddress: string;
  geometry:      Geometry;
  pmv:           null | string;
  dataLine:      string[];
}

export interface Geometry {
  type:        Type;
  coordinates: number[];
}

export enum Type {
  Point = "Point",
}

export interface TimeTable {
  IdLine:     string;
  Label:      string;
  nameA:      string;
  nameB:      string;
  typeOfDays: TypeOfDay[];
}

export interface TypeOfDay {
  Direction1: Direction;
  Direction2: Direction;
  DayType:    DayType;
}

export enum DayType {
  Fe = "FE",
  La = "LA",
  Sa = "SA",
  Vi = "VI",
}

export interface Direction {
  StartTime:        string;
  StopTime:         string;
  MinimunFrequency: string;
  MaximumFrequency: string;
  Frequency?:       null;
}
