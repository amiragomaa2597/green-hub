import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { OPINION_DESTINATION_EMAIL } from '../content/opinions.content';

export interface OpinionPayload {
  interestId: string;
  interestLabel: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class OpinionService {
  private readonly http = inject(HttpClient);

  private readonly endpoint = `https://formsubmit.co/ajax/${OPINION_DESTINATION_EMAIL}`;

  send(payload: OpinionPayload): Observable<{ ok: boolean }> {
    const body = {
      interest: payload.interestLabel,
      interest_id: payload.interestId,
      opinion: payload.message,
      _subject: 'The Green Hub — Opinion / Investment Interest',
      _template: 'table',
      _captcha: 'false',
      _honey: '',
    };

    return this.http
      .post<{ success?: string | boolean }>(this.endpoint, body, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
      })
      .pipe(
        map(() => ({ ok: true })),
        catchError(() => of({ ok: false }))
      );
  }
}
