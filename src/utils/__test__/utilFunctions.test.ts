// test utils functions in ../utilFunctions.ts file
import { describe, expect, it } from 'vitest';
import { formatDate, formatMount } from '../utilFunctions';
// import fireEvent from '@testing-library/user-event';

describe("formatDate", () => {
  it("should return a formatted date", () => {
    const date = "2012-03-21T18:31:36Z";
    expect(formatDate(date)).toBe("21/3/2012");
  });
});

describe("formatMount", () => {
  it("should return a formatted amount", () => {
    const amount = 1000000;
    expect(formatMount(amount)).toBe("1.000.000");
  });
});