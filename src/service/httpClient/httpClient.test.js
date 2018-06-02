import {
  get,
  post,
  put,
  del
} from './httpClient';

describe('Http client', () => {
  describe('get', () => {
    it('should return proper results on correct fetch', async () => {
      const url = 'localhost:8000';
      global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
        status: 200,
        json: () => {
          return {}
        }
      }));

      expect(await get(url)).toEqual({});
      expect(fetch).toHaveBeenCalledWith(url, {
        "headers": {
          "Content-Type": "application/json"
        }
      });
    });
    it('should return error when response.status >= 200 && response.status < 300', async () => {
      const url = 'localhost:8000';
      global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
        status: 404,
        json: () => {
          return {
            errorMessage: 'Error message'
          }
        }
      }));
      try {
        await await get('localhost:8000');
      } catch (error) {
        expect(error).toEqual(new Error('Error message'));
        expect(fetch).toHaveBeenCalledWith(url, {
          "headers": {
            "Content-Type": "application/json"
          }
        });
      }
    });
  });
  describe('post ', () => {
    it('should return proper results on correct fetch', async () => {
      const data = {
        url: 'localhost:8000',
        data: 'data'
      };
      global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
        status: 200,
        json: () => {
          return {}
        }
      }));

      expect(await post(data)).toEqual({});
      expect(fetch).toHaveBeenCalledWith("localhost:8000", {
        "body": JSON.stringify({data: 'data'}),
        "method": 'POST',
        "headers": {
          "Content-Type": "application/json"
        }
      });
    });
    it('should return error when response.status >= 200 && response.status < 300', async () => {
      const data = {
        url: 'localhost:8000',
        data: 'data'
      };
      global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
        status: 404,
        json: () => {
          return {
            errorMessage: 'Error message'
          }
        }
      }));
      try {
        await await post(data);
      } catch (error) {
        expect(error).toEqual(new Error('Error message'));
        expect(fetch).toHaveBeenCalledWith('localhost:8000', {
          "body": JSON.stringify({data: 'data'}),
          "method": 'POST',
          "headers": {
            "Content-Type": "application/json"
          }
        });
      }
    });
  });
  describe('put ', () => {
    it('should return proper results on correct fetch', async () => {
      const data = {
        url: 'localhost:8000',
        data: 'data'
      };
      global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
        status: 200,
        json: () => {
          return {}
        }
      }));

      expect(await put(data)).toEqual({});
      expect(fetch).toHaveBeenCalledWith("localhost:8000", {
        "body": JSON.stringify({data: 'data'}),
        "method": 'PUT',
        "headers": {
          "Content-Type": "application/json"
        }
      });
    });
    it('should return error when response.status >= 200 && response.status < 300', async () => {
      const data = {
        url: 'localhost:8000',
        data: 'data'
      };
      global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
        status: 404,
        json: () => {
          return {
            errorMessage: 'Error message'
          }
        }
      }));
      try {
        await await put(data);
      } catch (error) {
        expect(error).toEqual(new Error('Error message'));
        expect(fetch).toHaveBeenCalledWith('localhost:8000', {
          "body": JSON.stringify({data: 'data'}),
          "method": 'PUT',
          "headers": {
            "Content-Type": "application/json"
          }
        });
      }
    });
  });
  describe('del ', () => {
    it('should return proper results on correct fetch', async () => {
      const url = 'localhost:8000';
      global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
        status: 200,
        json: () => {
          return {}
        }
      }));

      expect(await del(url)).toEqual(200);
      expect(fetch).toHaveBeenCalledWith(url, {
        "method": "DELETE",
        "headers": {
          "Content-Type": "application/json"
        }
      });
    });
    it('should return error when response.status >= 200 && response.status < 300', async () => {
      const url = 'localhost:8000';
      global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
        status: 404,
        json: () => {
          return {
            errorMessage: 'Error message'
          }
        }
      }));
      try {
        await await del('localhost:8000');
      } catch (error) {
        expect(error).toEqual(new Error('Error message'));
        expect(fetch).toHaveBeenCalledWith(url, {
          method: 'DELETE',
          "headers": {
            "Content-Type": "application/json"
          }
        });
      }
    });
  });
});