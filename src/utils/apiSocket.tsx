import axios from "axios";

import { ApiConstants } from "../types/ApiConstants";
import type { CharactersDataWrapper } from "../types/CharactersResponse";
import type { ComicsDataWrapper } from "../types/ComicsResponse";
import type { StoriesDataWrapper } from "../types/StoriesResponse";

const marvelApi = axios.create({
  baseURL: ApiConstants.APIURI.toString(),
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCharacters = async (params: { [key: string]: string }) => {
  const urlParams = new URLSearchParams(params).toString();
  const {
    data: { data: response },
  }: { data: CharactersDataWrapper } = await marvelApi.get(
    `characters?${ApiConstants.KEYAUTH}${
      urlParams !== "" ? "&" + urlParams : ""
    }`
  );
  return response;
};

export const getCharacterByID = async (id: number) => {
  const {
    data: { data: response },
  }: { data: CharactersDataWrapper } = await marvelApi.get(
    `characters/${id}?${ApiConstants.KEYAUTH}`
  );
  return response?.results?.at(0);
};

export const getComicsByCharacterID = async (id: number) => {
  const {
    data: { data: response },
  }: { data: CharactersDataWrapper } = await marvelApi.get(
    `characters/${id}/comics?${ApiConstants.KEYAUTH}`
  );
  return response?.results;
};

export const getStoriesByCharacterID = async (id: number) => {
  const {
    data: { data: response },
  }: { data: StoriesDataWrapper } = await marvelApi.get(
    `characters/${id}/stories?${ApiConstants.KEYAUTH}`
  );
  return response?.results;
};

export const getComics = async (params: { [key: string]: string }) => {
  const urlParams = new URLSearchParams(params).toString();
  const {
    data: { data: response },
  }: { data: ComicsDataWrapper } = await marvelApi.get(
    `comics?${ApiConstants.KEYAUTH}${urlParams !== "" ? "&" + urlParams : ""}`
  );
  return response;
};

export const getComicByID = async (id: number) => {
  const {
    data: { data: response },
  }: { data: ComicsDataWrapper } = await marvelApi.get(
    `comics/${id}?${ApiConstants.KEYAUTH}`
  );
  return response?.results?.at(0);
};

export const getCharactersByComicID = async (id: number) => {
  const {
    data: { data: response },
  }: { data: ComicsDataWrapper } = await marvelApi.get(
    `comics/${id}/characters?${ApiConstants.KEYAUTH}`
  );
  return response?.results;
};

export const getStoriesByComicID = async (id: number) => {
  const {
    data: { data: response },
  }: { data: ComicsDataWrapper } = await marvelApi.get(
    `comics/${id}/stories?${ApiConstants.KEYAUTH}`
  );
  return response?.results;
};

export const getStories = async (params: { [key: string]: string }) => {
  const urlParams = new URLSearchParams(params).toString();
  const {
    data: { data: response },
  }: { data: StoriesDataWrapper } = await marvelApi.get(
    `stories?${ApiConstants.KEYAUTH}${urlParams !== "" ? "&" + urlParams : ""}`
  );
  return response;
};

export const getStoryByID = async (id: number) => {
  const {
    data: { data: response },
  }: { data: StoriesDataWrapper } = await marvelApi.get(
    `stories/${id}?${ApiConstants.KEYAUTH}`
  );
  return response?.results?.at(0);
};

export const getCharactersByStoryID = async (id: number) => {
  const {
    data: { data: response },
  }: { data: StoriesDataWrapper } = await marvelApi.get(
    `stories/${id}/characters?${ApiConstants.KEYAUTH}`
  );
  return response?.results;
};

export const getComicsByStoryID = async (id: number) => {
  const {
    data: { data: response },
  }: { data: StoriesDataWrapper } = await marvelApi.get(
    `stories/${id}/comics?${ApiConstants.KEYAUTH}`
  );
  return response?.results;
};
