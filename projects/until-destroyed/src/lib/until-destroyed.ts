import { MonoTypeOperatorFunction, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { OnDestroy } from '@angular/core';

const metaProperty = Symbol();

export function untilDestroyed<T>(componentInstance: OnDestroy): MonoTypeOperatorFunction<T> {
    if (!componentInstance[metaProperty]) {
        const originalDestructor = componentInstance.ngOnDestroy;

        componentInstance[metaProperty] = new Subject();

        componentInstance.ngOnDestroy = function() {
            if (originalDestructor) {
                originalDestructor.call(componentInstance);
            }

            componentInstance[metaProperty].next();
            componentInstance[metaProperty].complete();
        };
    }
    return takeUntil(componentInstance[metaProperty]);
}

