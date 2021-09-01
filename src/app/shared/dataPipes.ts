import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'cuitFormatter'})
export class CuitFormatterPipe implements PipeTransform {
    transform(value: number | undefined | null): string | undefined | null {
        let aux: string | undefined = value?.toString();
        return aux?.substr(0,2) + '-' + aux?.substr(2,8) + '-' + aux?.substr(8,1) 
    }
}

@Pipe({name: 'dniFormatter'})
export class DniFormatterPipe implements PipeTransform {
    transform(value: number | undefined | null): string | undefined | null {
        let aux: string | undefined = value?.toString();
        if(aux && aux.length < 8){
            return aux?.substr(0,1) + '.' + aux?.substr(1,3) + '.' + aux?.substr(4,3) 
        }
        return aux?.substr(0,2) + '.' + aux?.substr(2,3) + '.' + aux?.substr(5,3) 
    }
}


@Pipe({name: 'phoneFormatter'})
export class PhoneFormatterPipe implements PipeTransform {
    transform(value: string | undefined | null): string | undefined | null {
        let valueLength: number = value?.length ?? 0;
        let lastPart: number = valueLength - 4;
        let midlePart: number = valueLength - 8;

        return '(' + value?.substr(0,midlePart) + ') ' + value?.substr(midlePart,4) + '-' + value?.substr(lastPart,4) 
    }
}