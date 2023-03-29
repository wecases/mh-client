import { Lazyload } from 'vant';

export default (app: any) => {
    app.use(Lazyload, {
        lazyComponent: true,
    })
}
