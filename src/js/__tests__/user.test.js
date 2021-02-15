import getLevel from '../user';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('adress check', () => {
  fetchData.mockReturnValue({});
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('response ok', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 10 });
  const response = getLevel(1);
  expect(response).toEqual('Ваш текущий уровень: 10');
});

test('response failed', () => {
  fetchData.mockReturnValue({});
  const response = getLevel(1);
  expect(response).toEqual('Информация об уровне временно недоступна');
});
