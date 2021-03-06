import Account from './account';
import Artist from './artist';
import Tag, { Taggable } from './tag';
import Track from './track';
import Album from './album';
import Event from './event';
import PlayerState from './playerState';
import CacheEntry from './cacheEntry';
import Session from './session';

const models = { Account, Artist, Tag, Taggable, Track, Album, PlayerState, Event, CacheEntry, Session };

export const toModel = val => {
  if (val instanceof Array) {
    const arr = val;
    return arr.map(toModel);
  }
  if (val && typeof val === 'object') {
    const obj = val;
    Object.keys(obj).forEach(k => {
      obj[k] = toModel(obj[k]);
    });
    const { _c_ } = obj;
    if (_c_) {
      const ModelClass = models[_c_];
      if (ModelClass) {
        return new ModelClass(obj);
      }
      throw new Error(`Unknown model class: ${_c_}`);
    }
  }
  return val;
};
