type Messages = typeof import("./messages/en.json");
type EsMessages = typeof import("./messages/es.json");
type PtMessages = typeof import("./messages/pt.json");

declare interface IntlMessages extends Messages, EsMessages, PtMessages {}