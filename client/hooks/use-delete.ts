import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'

export function useDelete(id: number) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data) => {
      await request
        .delete(`https://paataka.cloud/api/_/team-todo/todo/${id}`)
        .auth('inboT4cuIWA', { type: 'bearer' })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['todos', id])
    },
  })
}
