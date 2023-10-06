/* eslint-disable @typescript-eslint/no-unused-vars */
import { Observable, Subject, Subscription, interval, take, takeUntil } from "rxjs";
import { from, delay } from "rxjs";

function delayPromise(ms: number) {
  return new Promise((resolve, _reject) => {
    setTimeout(resolve, ms);
  });
}

const rawStream = from([1, 2, 3]);
const rawStreamDelay = from([1, 2, 3]).pipe(delay(1000));
const rawStreamInfinite = interval(500);

function processRawStream(rawStream: Observable<any>): Observable<any> {
  // The rawStream will continue emitting even after the parentObservable has been completed
  return new Observable(subscriber => {
    let subscription: null | Subscription = null;
    const cleaner = new Subject<void>();

    subscription = rawStream.pipe(takeUntil(cleaner)).subscribe({
      // subscription = rawStream.pipe(take(1)).subscribe({
      // subscription = rawStream.pipe().subscribe({
      next: value => {
        console.log(`🦄 From raw stream: ${value}`);
        subscriber.next(`Processed ${value}`);
        // We stop after receiving the 1st event
        subscriber.complete();
        // ✋ Note: this does not do anything
        // It can even triggers error
        // if (subscription && !subscription.closed) {
        //   subscription.unsubscribe();
        // }
      },
      error: error => {
        console.error(`❌ From raw stream: ${error}`);
        subscriber.error(error);
      },
      complete: () => {
        subscriber.complete();
      },
    });

    return () => {
      // ✋ Neither does this.
      // It can even triggers error: executing a cancelled action
      console.log(`🧹 Cleaning: closed ? ${subscription?.closed}`);
      console.log(`🧹 Cleaner: closed ? ${cleaner.closed}`);
      // if (subscription && !subscription.closed) {
      //   subscription.unsubscribe();
      // }
      cleaner.next();
    };
  });
}

describe("playground", () => {
  test("ok", done => {
    // let flagGo = false;

    // console.log("🦖 Raw Stream 1");
    // processRawStream(rawStream).subscribe({
    //     next: value => {
    //       console.log(`Root 🫚: event ${value}`);
    //     },
    //     error: error => {
    //       console.log(`Root 🫚: error ${error}`);
    //     },
    //     complete: () => {
    //       console.log(`Root 🫚: complete`);
    //       flagGo = true;
    //     }
    // });

    // while (!flagGo) {
    //   delayPromise(5000);
    // }

    // console.log("🦖 Raw Stream delay");
    // processRawStream(rawStreamDelay.pipe(take(1))).subscribe({
    //   next: value => {
    //     console.log(`Root delay 🫚: event ${value}`);
    //   },
    //   error: error => {
    //     console.log(`Root delay 🫚: error ${error}`);
    //   },
    //   complete: () => {
    //     console.log(`Root delay 🫚: complete`);
    //     done();
    //   },
    // });

    // console.log(`🐕 testing take`);
    // rawStreamDelay.pipe(take(1)).subscribe({
    //   next: value => {
    //     console.log(`take 🫚: event ${value}`);
    //   },
    //   error: error => {
    //     console.log(`take 🫚: error ${error}`);
    //   },
    //   complete: () => {
    //     console.log(`take 🫚: complete`);
    //     done();
    //   },
    // });

    console.log("🦖 Raw Stream infinite");
    processRawStream(rawStreamInfinite).subscribe({
      next: value => {
        console.log(`Root infinite 🫚: event ${value}`);
      },
      error: error => {
        console.log(`Root infinite 🫚: error ${error}`);
      },
      complete: () => {
        console.log(`Root infinite 🫚: complete`);
        done();
      },
    });
  });
});
