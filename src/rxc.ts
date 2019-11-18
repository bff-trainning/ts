import {of} from 'rxjs'
import { map } from 'rxjs/operators';
of(1,2,3).subscribe(x => console.log(x + '!!!')); // etc
console.log("asss");