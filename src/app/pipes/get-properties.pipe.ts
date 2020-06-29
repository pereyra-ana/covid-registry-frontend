import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'getProperties' })
export class GetPropertiesPipe implements PipeTransform {

    transform(value: {}): { type: string; props: any }[] {
        if (!value) {
            return [];
        }

        const keys = Object.keys(value);
        const resp: { type: string; props: any }[] = [];

        for (const k of keys) {
            resp.push({ type: k, props: value[k] });
            return resp;
        }

        return resp;
    }
}
