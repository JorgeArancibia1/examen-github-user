import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useFetchUser } from "../useFetchUser";

interface IChildren {
  children: React.ReactNode;
}

export const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  return ({ children }: IChildren) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

describe("useFetchUser", () => {
  test("should return user, repos, isLoadingRepos and isLoading", async () => {
    const { result } = renderHook(() =>
      useFetchUser("midudev"), {wrapper: createWrapper()}
    );

    expect(result.current.user).toBeNull();
    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.isLoadingRepos).toBeFalsy();
    expect(result.current.repos).toHaveLength(0);

    // Wait for the user to be fetched
    await waitFor( ()=> expect(result.current.isLoading).toBeFalsy());
    await waitFor( ()=> expect(result.current.isLoadingRepos).toBeTruthy());

    expect(result.current.user).not.toBeNull();
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.repos).toBeInstanceOf(Array);

    // Wait for the repos to be fetched
    await waitFor( ()=> expect(result.current.repos).not.toEqual([]));
    expect(result.current.isLoadingRepos).toBeFalsy()
    expect(result.current.repos).toHaveLength(4);

  })
});
