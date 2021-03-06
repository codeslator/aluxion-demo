// Generated by https://quicktype.io

export interface StopsResponse {
  code:        string;
  description: string;
  datetime:    string;
  data:        Datum[];
}

export interface Datum {
  stops: Stop[];
}

export interface Stop {
  stop:          string;
  name:          string;
  postalAddress: string;
  geometry:      Geometry;
  pmv:           null;
  dataLine:      DataLine[];
}

export interface DataLine {
  line:      string;
  label:     string;
  direction: string;
  maxFreq:   string;
  minFreq:   string;
  headerA:   string;
  headerB:   string;
  startTime: string;
  stopTime:  string;
  dayType:   string;
}

export interface Geometry {
  type:        string;
  coordinates: number[];
}
