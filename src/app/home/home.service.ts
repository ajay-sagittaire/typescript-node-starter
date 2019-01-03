import { GET, Path } from 'typescript-rest';

// tslint:disable-next-line:no-var-requires
const pkg = require(__dirname + '/../../../package.json');

@Path('/')
export default class HomeService {
    
    @GET
    public getIndex() {
        const version = pkg ? pkg.version : null;
        const name = pkg ? pkg.name : null;
        return {
            message: `Welcome to ${name || process.env.npm_package_name}`,
            version: version || process.env.npm_package_version,
        };
    }

}
