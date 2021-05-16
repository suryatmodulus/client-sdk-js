export class LivekitError {
  code: number;
  message?: string;

  constructor(code: number, message?: string) {
    this.code = code;
    this.message = message;
  }
}

export class TrackInvalidError extends LivekitError {
  constructor(message?: string) {
    super(20, message || 'Track is invalid');
  }
}

export class UnsupportedServer extends LivekitError {
  constructor(message?: string) {
    super(10, message || 'Unsupported server');
  }
}

export class UnexpectedConnectionState extends LivekitError {
  constructor(message?: string) {
    super(12, message || 'Unexpected connection state');
  }
}

export class PublishDataError extends LivekitError {
  constructor(message?: string) {
    super(13, message || 'Unable to publish data');
  }
}

export class TrackPublishError extends LivekitError {
  constructor(message?: string) {
    super(14, message || 'Error while publishing track');
  }
}