interface Publisher {
    // Properties
    subscribers: Array<Subscriber>;
  
    // Methods
    subscribe(subscriber: Subscriber): void;
    unSubscribe(subscriber: Subscriber): void;
    publish(): void;
  }
  interface Subscriber {
    update(newsHeadline: string): void;
  }
  class NewsPublishingStation implements Publisher {
    // Properties
    newsHeadline: string;
    subscribers = [];
  
    // Methods
    makeHeadline(headline: string) {
      this.newsHeadline = headline;
      this.publish();
    }
    subscribe(subscriber: Subscriber) {
      this.subscribers.push(subscriber);
    }
    unSubscribe(subscriber: Subscriber) {
      let index = this.subscribers.indexOf(subscriber);
      if (index >= 0) this.subscribers.splice(index, 1);
    }
    publish() {
      this.subscribers.map((subscriber: Subscriber) => {
        subscriber.update(this.newsHeadline);
      });
    }
  }
  
  class UrbanSubscriber implements Subscriber {
    name: String;
  
    constructor(nameArg: String) {
      this.name = nameArg;
    }
    update(newsHeadline: string) {
      console.log(this.name, ": ", newsHeadline);
    }
  }
  let jack = new UrbanSubscriber("Ssenengo Jackson");
  let biko = new UrbanSubscriber("Biko Jeremy");
  let queen = new UrbanSubscriber("Queen");
  let davis = new UrbanSubscriber("Davis Mugume");
  let eva = new UrbanSubscriber("Eva Mirembe");
  let newVision = new NewsPublishingStation();
  newVision.subscribe(jack);
  newVision.subscribe(biko);
  newVision.subscribe(queen);
  newVision.subscribe(davis);
  newVision.subscribe(eva);
  newVision.makeHeadline("Entiisa!!!");
  newVision.unSubscribe(jack);
  newVision.makeHeadline("Essanyu!!!");
  newVision.makeHeadline("Bamukutte!!!");
  newVision.makeHeadline("Olubabu!!!");
  newVision.makeHeadline("Bajaguza!!!");
  newVision.makeHeadline("Bawedde!!!");