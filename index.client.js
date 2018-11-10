import { api, configure as _configure, onApiError as _onApiError } from './src';
import model from './src/model';

export const { Artist, Tag, Taggable, Track, Album, PlayerState, Event } = model;

export const configure = _configure;
export const onApiError = _onApiError;

export default api;
