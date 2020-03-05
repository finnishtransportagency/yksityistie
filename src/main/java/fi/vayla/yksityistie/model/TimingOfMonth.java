package fi.vayla.yksityistie.model;

public enum TimingOfMonth {
	BEGINING {
		public String toString() {
			return "alku";
		}
	},
	MIDDLE {
		public String toString() {
			return "keskiväli";
		}
	},
	END {
		public String toString() {
			return "loppu";
		}
	}
}
