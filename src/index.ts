
// Inversify container
import { container } from './inversify.config'

// Inversify Express
import { InversifyExpressServer } from "inversify-express-utils";

// Setting Seerver
import { setUp } from './server'

const server = new InversifyExpressServer(container);
server.setConfig(setUp);

const app = server.build();

app.listen(5000, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${5000}`);
});
