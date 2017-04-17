import { HttpBaseService } from './http-base.service';


describe('As an App I want to consume http services so that I can fetch external resources', function () {
    const httpStub = {
        get: (url: any) => {
            return new Promise((resolve, reject) => {
                resolve('success');
            });
        },
        post: (url: any, body: any) => {
            return new Promise((resolve, reject) => {
                reject('failure');
            });
        }
    };

    const service = new HttpBaseService(<any>httpStub, 'fooResource');

    describe('Given that I call the HttpBaseService to get or post data', () => {
        let get: any, getAll: any, post: any;

        beforeEach(async () => {
            get = service.get('id');
            getAll = await service.getAll();
            post = await service.post('body')
        });

        describe('When the service is configured', () => {
            it('Then the fullUrl must include fooResource', () => {
                expect(service.fullUrl).toBe('http://localhost:8080/fooResource')                
            });
        });


        xdescribe('When I read the results', () => {

            it('Then the get should be successful', () => expect(get).toBe('success'));
            it('And the getAll should be successful', () => expect(getAll).toBe('success'));
            it('And the post should not be successful', () => expect(post).toBe('failure'));

        });
    });
});
