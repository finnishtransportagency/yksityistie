package fi.vayla.yksityistie.model;


public class TrafficSigns {
    private final Boolean isRecurrent;
    private final String info;

    public TrafficSigns(Boolean isRecurrent, String info) {
        this.isRecurrent = isRecurrent;
        this.info = info;
    }

    public Boolean getRecurrent() {
        return this.isRecurrent;
    }

    public String getInfo() {
        return this.info;
    }

}