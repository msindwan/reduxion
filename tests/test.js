/**
 * test.js
 *
 * @Author : Mayank Sindwani
 * @Date   : 2017-11-10
 * @Description : Tests for reduxion.
 *
 * The MIT License(MIT)
 * Copyright(c) 2016 Mayank Sindwani
 **/

import ActionTests     from './action';
import DispatcherTests from './dispatcher';
import StoreTests      from './store';
import ReducerTests    from './reducer';

describe('Test Actions', ActionTests);
describe('Test Dispatcher', DispatcherTests);
describe('Test Store', StoreTests);
describe('Test Reducer', ReducerTests);
