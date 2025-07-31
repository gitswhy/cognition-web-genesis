export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      auto_patch_runs: {
        Row: {
          causal_lines: Json | null
          created_at: string | null
          created_by: string | null
          id: string
          loc_original: number | null
          loc_touched: number | null
          pr_url: string | null
          sha: string | null
          status: string | null
          tries: number | null
        }
        Insert: {
          causal_lines?: Json | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          loc_original?: number | null
          loc_touched?: number | null
          pr_url?: string | null
          sha?: string | null
          status?: string | null
          tries?: number | null
        }
        Update: {
          causal_lines?: Json | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          loc_original?: number | null
          loc_touched?: number | null
          pr_url?: string | null
          sha?: string | null
          status?: string | null
          tries?: number | null
        }
        Relationships: []
      }
      billing_subscriptions: {
        Row: {
          created_at: string
          credit_balance: number | null
          credits_used: number
          current_period_end: string | null
          current_period_start: string | null
          github_org: string | null
          plan_code: string | null
          plan_id: string
          quota: number
          referral_clicks: number | null
          stripe_customer_id: string | null
          stripe_price_id: string | null
          stripe_subscription_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          credit_balance?: number | null
          credits_used?: number
          current_period_end?: string | null
          current_period_start?: string | null
          github_org?: string | null
          plan_code?: string | null
          plan_id: string
          quota: number
          referral_clicks?: number | null
          stripe_customer_id?: string | null
          stripe_price_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          credit_balance?: number | null
          credits_used?: number
          current_period_end?: string | null
          current_period_start?: string | null
          github_org?: string | null
          plan_code?: string | null
          plan_id?: string
          quota?: number
          referral_clicks?: number | null
          stripe_customer_id?: string | null
          stripe_price_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      commits: {
        Row: {
          committed_at: string | null
          diff: string | null
          hash: string
          id: string
          inserted_at: string | null
          message: string | null
          project_id: string
        }
        Insert: {
          committed_at?: string | null
          diff?: string | null
          hash: string
          id?: string
          inserted_at?: string | null
          message?: string | null
          project_id: string
        }
        Update: {
          committed_at?: string | null
          diff?: string | null
          hash?: string
          id?: string
          inserted_at?: string | null
          message?: string | null
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "commits_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      credit_transactions: {
        Row: {
          amount_usd: number
          created_at: string | null
          credits_added: number
          id: string
          stripe_payment_id: string | null
          user_id: string | null
        }
        Insert: {
          amount_usd: number
          created_at?: string | null
          credits_added: number
          id?: string
          stripe_payment_id?: string | null
          user_id?: string | null
        }
        Update: {
          amount_usd?: number
          created_at?: string | null
          credits_added?: number
          id?: string
          stripe_payment_id?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      dora_metrics: {
        Row: {
          cfr_percent: number | null
          created_at: string | null
          day: string
          deploy_freq: number | null
          lead_time_ms: number | null
          mttr_ms: number | null
          repo_id: string
          updated_at: string | null
          why_coverage: number | null
        }
        Insert: {
          cfr_percent?: number | null
          created_at?: string | null
          day: string
          deploy_freq?: number | null
          lead_time_ms?: number | null
          mttr_ms?: number | null
          repo_id: string
          updated_at?: string | null
          why_coverage?: number | null
        }
        Update: {
          cfr_percent?: number | null
          created_at?: string | null
          day?: string
          deploy_freq?: number | null
          lead_time_ms?: number | null
          mttr_ms?: number | null
          repo_id?: string
          updated_at?: string | null
          why_coverage?: number | null
        }
        Relationships: []
      }
      explanations: {
        Row: {
          citations: Json | null
          commit_id: string
          created_at: string | null
          id: string
          intent: string
          risk_level: string
        }
        Insert: {
          citations?: Json | null
          commit_id: string
          created_at?: string | null
          id?: string
          intent: string
          risk_level: string
        }
        Update: {
          citations?: Json | null
          commit_id?: string
          created_at?: string | null
          id?: string
          intent?: string
          risk_level?: string
        }
        Relationships: [
          {
            foreignKeyName: "explanations_commit_id_fkey"
            columns: ["commit_id"]
            isOneToOne: false
            referencedRelation: "commits"
            referencedColumns: ["id"]
          },
        ]
      }
      feature_flags: {
        Row: {
          created_at: string | null
          enabled: boolean
          flag: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          enabled?: boolean
          flag: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          enabled?: boolean
          flag?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      intent_graph: {
        Row: {
          created_at: string | null
          dst_id: string
          edge_type: string
          src_id: string
        }
        Insert: {
          created_at?: string | null
          dst_id: string
          edge_type: string
          src_id: string
        }
        Update: {
          created_at?: string | null
          dst_id?: string
          edge_type?: string
          src_id?: string
        }
        Relationships: []
      }
      leaderboard: {
        Row: {
          id: number
          invites: number | null
          name: string
        }
        Insert: {
          id?: number
          invites?: number | null
          name: string
        }
        Update: {
          id?: number
          invites?: number | null
          name?: string
        }
        Relationships: []
      }
      patch_metrics: {
        Row: {
          created_at: string | null
          id: string
          original_loc: number
          patch_run_id: string | null
          patched_loc: number
          reduction_percent: number | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          original_loc: number
          patch_run_id?: string | null
          patched_loc: number
          reduction_percent?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string
          original_loc?: number
          patch_run_id?: string | null
          patched_loc?: number
          reduction_percent?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "patch_metrics_patch_run_id_fkey"
            columns: ["patch_run_id"]
            isOneToOne: false
            referencedRelation: "auto_patch_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          created_at: string | null
          host: string | null
          id: string
          name: string
          repo_url: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          host?: string | null
          id?: string
          name: string
          repo_url: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          host?: string | null
          id?: string
          name?: string
          repo_url?: string
          user_id?: string
        }
        Relationships: []
      }
      referrals: {
        Row: {
          created_at: string | null
          id: string
          referred_id: string
          referrer_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          referred_id: string
          referrer_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          referred_id?: string
          referrer_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "referrals_referred_id_fkey"
            columns: ["referred_id"]
            isOneToOne: true
            referencedRelation: "top_referrers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referrals_referred_id_fkey"
            columns: ["referred_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referrals_referrer_id_fkey"
            columns: ["referrer_id"]
            isOneToOne: false
            referencedRelation: "top_referrers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referrals_referrer_id_fkey"
            columns: ["referrer_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      repo_cache: {
        Row: {
          analysis: string
          cache_key: string
          created_at: string
          expires_at: string
          id: string
          repo_url: string
        }
        Insert: {
          analysis: string
          cache_key: string
          created_at?: string
          expires_at?: string
          id?: string
          repo_url: string
        }
        Update: {
          analysis?: string
          cache_key?: string
          created_at?: string
          expires_at?: string
          id?: string
          repo_url?: string
        }
        Relationships: []
      }
      repositories: {
        Row: {
          created_at: string | null
          default_branch: string | null
          full_name: string
          host: string
          id: string
          name: string
          private: boolean | null
          updated_at: string | null
          url: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          default_branch?: string | null
          full_name: string
          host?: string
          id?: string
          name: string
          private?: boolean | null
          updated_at?: string | null
          url: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          default_branch?: string | null
          full_name?: string
          host?: string
          id?: string
          name?: string
          private?: boolean | null
          updated_at?: string | null
          url?: string
          user_id?: string
        }
        Relationships: []
      }
      risk_score: {
        Row: {
          churn: number
          complexity: number
          computed_at: string
          file_path: string
          repo_id: string
          score: number
          test_gap: number
        }
        Insert: {
          churn?: number
          complexity?: number
          computed_at?: string
          file_path: string
          repo_id: string
          score: number
          test_gap?: number
        }
        Update: {
          churn?: number
          complexity?: number
          computed_at?: string
          file_path?: string
          repo_id?: string
          score?: number
          test_gap?: number
        }
        Relationships: []
      }
      share_links: {
        Row: {
          clicks: number | null
          created_at: string | null
          created_by: string | null
          id: string
          intent_json: Json | null
          path: string | null
          refid: string | null
          sha: string
        }
        Insert: {
          clicks?: number | null
          created_at?: string | null
          created_by?: string | null
          id: string
          intent_json?: Json | null
          path?: string | null
          refid?: string | null
          sha: string
        }
        Update: {
          clicks?: number | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          intent_json?: Json | null
          path?: string | null
          refid?: string | null
          sha?: string
        }
        Relationships: []
      }
      suggested_fixes: {
        Row: {
          code: string
          created_at: string | null
          explanation: string
          explanation_id: string
          id: string
        }
        Insert: {
          code: string
          created_at?: string | null
          explanation: string
          explanation_id: string
          id?: string
        }
        Update: {
          code?: string
          created_at?: string | null
          explanation?: string
          explanation_id?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "suggested_fixes_explanation_id_fkey"
            columns: ["explanation_id"]
            isOneToOne: false
            referencedRelation: "explanations"
            referencedColumns: ["id"]
          },
        ]
      }
      team_seats: {
        Row: {
          accepted_at: string | null
          created_at: string | null
          email: string
          id: string
          invited_at: string | null
          role: string | null
          seat_id: string | null
          team_id: string
          updated_at: string | null
        }
        Insert: {
          accepted_at?: string | null
          created_at?: string | null
          email: string
          id?: string
          invited_at?: string | null
          role?: string | null
          seat_id?: string | null
          team_id: string
          updated_at?: string | null
        }
        Update: {
          accepted_at?: string | null
          created_at?: string | null
          email?: string
          id?: string
          invited_at?: string | null
          role?: string | null
          seat_id?: string | null
          team_id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      usage_events: {
        Row: {
          commit_hash: string | null
          created_at: string
          credits_consumed: number
          event_type: string
          id: string
          user_id: string
        }
        Insert: {
          commit_hash?: string | null
          created_at?: string
          credits_consumed?: number
          event_type: string
          id?: string
          user_id: string
        }
        Update: {
          commit_hash?: string | null
          created_at?: string
          credits_consumed?: number
          event_type?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          credits: number
          email: string
          id: string
          referrer_id: string | null
        }
        Insert: {
          created_at?: string | null
          credits?: number
          email: string
          id?: string
          referrer_id?: string | null
        }
        Update: {
          created_at?: string | null
          credits?: number
          email?: string
          id?: string
          referrer_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_referrer_id_fkey"
            columns: ["referrer_id"]
            isOneToOne: false
            referencedRelation: "top_referrers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_referrer_id_fkey"
            columns: ["referrer_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      vcs_credentials: {
        Row: {
          access_token: string
          created_at: string | null
          expires_at: string | null
          host: string
          id: string
          refresh_token: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          access_token: string
          created_at?: string | null
          expires_at?: string | null
          host: string
          id?: string
          refresh_token?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          access_token?: string
          created_at?: string | null
          expires_at?: string | null
          host?: string
          id?: string
          refresh_token?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      waitlist: {
        Row: {
          created_at: string | null
          email: string
          id: number
          referral_code: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: number
          referral_code?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: number
          referral_code?: string | null
        }
        Relationships: []
      }
      webhook_events: {
        Row: {
          created_at: string | null
          event_type: string
          host: string
          id: string
          payload: Json | null
          processed_at: string | null
          repo_full_name: string
        }
        Insert: {
          created_at?: string | null
          event_type: string
          host: string
          id?: string
          payload?: Json | null
          processed_at?: string | null
          repo_full_name: string
        }
        Update: {
          created_at?: string | null
          event_type?: string
          host?: string
          id?: string
          payload?: Json | null
          processed_at?: string | null
          repo_full_name?: string
        }
        Relationships: []
      }
      why_rules: {
        Row: {
          ast_pattern: Json
          created_at: string | null
          fix_snippet: string | null
          provider: string | null
          rule_id: string
          severity: string | null
          tags: string[] | null
        }
        Insert: {
          ast_pattern: Json
          created_at?: string | null
          fix_snippet?: string | null
          provider?: string | null
          rule_id: string
          severity?: string | null
          tags?: string[] | null
        }
        Update: {
          ast_pattern?: Json
          created_at?: string | null
          fix_snippet?: string | null
          provider?: string | null
          rule_id?: string
          severity?: string | null
          tags?: string[] | null
        }
        Relationships: []
      }
    }
    Views: {
      top_referrers: {
        Row: {
          email: string | null
          id: string | null
          invites: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      calculate_dora_metrics: {
        Args: { target_repo_id: string; target_date: string }
        Returns: {
          deploy_freq: number
          lead_time_ms: number
          cfr_percent: number
          mttr_ms: number
          why_coverage: number
        }[]
      }
      causal_chain: {
        Args: { target_sha: string }
        Returns: {
          line_numbers: number[]
          file_path: string
          causal_depth: number
        }[]
      }
      cleanup_expired_repo_cache: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      consume_balance: {
        Args: { uid: string }
        Returns: undefined
      }
      debit_credit: {
        Args: { uid: string }
        Returns: {
          success: boolean
          remaining_credits: number
          used_balance: boolean
        }[]
      }
      get_metrics_in_range: {
        Args: { target_repo_id: string; days_back?: number }
        Returns: {
          day: string
          deploy_freq: number
          lead_time_ms: number
          cfr_percent: number
          mttr_ms: number
          why_coverage: number
        }[]
      }
      get_project_commits: {
        Args: { project_uuid: string; page_size?: number; page_offset?: number }
        Returns: {
          id: string
          hash: string
          message: string
          committed_at: string
          inserted_at: string
          intent: string
          risk_level: string
          citations: Json
          suggested_fix_explanation: string
          suggested_fix_code: string
        }[]
      }
      handle_referral: {
        Args: { p_referrer_id: string; p_referred_id: string }
        Returns: undefined
      }
      increment_click: {
        Args: { link_id: string }
        Returns: undefined
      }
      reset_credits: {
        Args: {
          stripe_sub_id: string
          period_start: string
          period_end: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
